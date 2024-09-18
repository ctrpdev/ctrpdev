import { ReactNode } from "react";
import {Link} from '@/i18n/routing';

type DockMenuItemProps = {
    icon: ReactNode;
    url: string;
    style: string;
}

export default function DockMenuItem({ icon, url, style }: DockMenuItemProps) {
    return (
        <li className={style}>
            <Link href={ url }>
                { icon }
            </Link>
        </li>
    )
}