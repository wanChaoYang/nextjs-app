import Link from "next/link";
import React, { ReactNode } from "react";

export default function ListLayout({
    children,
    message,
    total
}: {
    children: ReactNode,
    message: ReactNode,
    total: ReactNode
}) {
    return (
        <>
            <div>{children}</div>
            <div>
                <Link href={"/dashboard/detail"}>查看详情</Link>
                <div>
                    {message}
                </div>
                <div>{total}</div>
            </div>
        </>
    )
}