import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { SuperheroApi } from "@/interfaces/superheroApi";

export const runtime = "nodejs";

const API_URL =
  "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = Number(searchParams.get("limit") ?? 20);
  const offset = Number(searchParams.get("offset") ?? 0);

  if (
    !Number.isInteger(limit) ||
    limit < 1 ||
    limit > 100 ||
    !Number.isInteger(offset) ||
    offset < 0
  ) {
    return NextResponse.json(
      { message: "Parâmetros de paginação inválidos." },
      { status: 400 },
    );
  }

  try {
    const response = await axios.get<SuperheroApi[]>(API_URL, {
      timeout: 15000,
    });

    const marvelHeroes = response.data.filter(
      (hero) => hero.biography.publisher === "Marvel Comics",
    );

    const paginatedHeroes = marvelHeroes
      .slice(offset, offset + limit)
      .map((hero) => ({
        id: hero.id,
        name: hero.name,
        description: [
          hero.biography.fullName,
          hero.biography.firstAppearance,
          hero.work.occupation,
        ]
          .filter((value) => value && value !== "-")
          .join(". "),
        thumbnail: {
          path: hero.images.md,
          extension: "",
        },
      }));

    return NextResponse.json(paginatedHeroes);
  } catch (error) {
    console.error("Erro ao consultar a Superhero API:", error);

    return NextResponse.json(
      { message: "Não foi possível consultar os personagens." },
      { status: 502 },
    );
  }
}
