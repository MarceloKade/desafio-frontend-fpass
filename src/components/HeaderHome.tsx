'use client'
import * as H from './header/styles';
import CustomLink from './header/CustomLink';

export default function HeaderHome() {
    return (
        <>
            <nav>
                <H.Ul>
                    <H.Image src="/img/logo.svg" />
                    <H.Lista>
                        <CustomLink
                            href="/search"
                            text="Search"
                        />
                    </H.Lista>
                </H.Ul>
            </nav >
        </>
    );
};