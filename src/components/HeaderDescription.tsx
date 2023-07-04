'use client'
import * as H from './header/styles';
import CustomLink from './header/CustomLink';

export default function Header() {
    return (
        <>
            <nav>
                <H.Ul>
                    <H.Container>
                        <H.Logo>
                            <img src="/img/logo.svg" />
                        </H.Logo>
                        <H.Lista>
                            <CustomLink
                                href="/"
                                text="Home"
                            />
                        </H.Lista>
                    </H.Container>
                </H.Ul>
            </nav >
        </>
    );
};