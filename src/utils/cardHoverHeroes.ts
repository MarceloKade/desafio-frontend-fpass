import { useRef } from 'react';

export default function useCardHover(){
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (el) {
            const elRect = el.getBoundingClientRect();
            const x = e.clientX - elRect.x;
            const y = e.clientY - elRect.y;
            const midCardWidth = elRect.width / 2;
            const midCardHeight = elRect.height / 2;
            const angleY = -(x - midCardWidth) / 16;
            const angleX = (y - midCardHeight) / 16;
            (el.children[0] as HTMLElement).style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        }
    };

    const handleMouseLeave = () => {
        const el = cardRef.current;
        if (el) {
            (el.children[0] as HTMLElement).style.transform = 'rotateX(0) rotateY(0)';
        }
    };

    return { cardRef, handleMouseMove, handleMouseLeave };
};
