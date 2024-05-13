import {MouseEvent} from "react";
import { useNavigate } from "react-router-dom";
import { HTMLAttributes, ReactNode } from "react";
//
// type Props = {
//     to?: string;
//     onClick?: Event;
//     children?: ReactNode;
//     onMouseDown?: (e: MouseEvent<HTMLButtonElement>) => void;
//     isDirty?: boolean;
//     handleDirty?: () => void;
// } & HTMLAttributes<HTMLButtonElement>;

export default function ButtonLink({
                                       to,
                                       onClick,
                                       isDirty,
                                       handleDirty,
                                       children,
                                       onMouseDown,
                                       ...others
                                   }) {
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        if (onClick) {
            const result = onClick(e);
            // @ts-ignore
            if (result === false) return;
        }

        if (to) {
            if (isDirty && handleDirty) {
                if (
                    window.confirm(
                        "You have unsaved changes. Are you sure you want to leave?",
                    )
                ) {
                    navigate(to);
                }
            } else {
                navigate(to);
            }
        }
    };

    const handleOnMouseDown = (e) => {
        if (e.button === 1 && to) {
            window.open(to, "_blank");
        }

        if (onMouseDown) {
            onMouseDown(e);
        }
    };

    return (

        <button
            {...others}
            type="button"
            onClick={handleOnClick}
            onMouseDown={handleOnMouseDown}
        >
            {children}
        </button>
    );
}
