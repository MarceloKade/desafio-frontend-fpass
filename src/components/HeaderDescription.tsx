'use client'
import * as H from './header/styles';
import CustomLink from './header/CustomLink';

export default function HeaderDescription() {
    return (
        <>
            <nav>
                <H.Ul>
                    <H.Image src="/img/logo.svg" />
                    <H.Lista>
                        <CustomLink
                            href="/"
                            text="Home"
                        />
                    </H.Lista>
                </H.Ul>
            </nav >
        </>
    );
};