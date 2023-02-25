"use client";

import { isUrlInternal } from "@lib/helpers";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { AnchorHTMLAttributes, DetailedHTMLProps, useContext } from "react";
import RouterContext from "./RouterContext";

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

function HeaderLink(props: Props) {
  const segment = useSelectedLayoutSegment();
  const isActive = segment === props.href?.slice(1);

  const classes = clsx(
    "flex items-center text-lg font-semibold sm:text-sm leading-none",
    !isActive && "text-slate-600",
    props.href &&
      isUrlInternal(props.href) &&
      "hover:underline decoration-slate-600"
  );

  const startChange = useContext(RouterContext);

  if (props.href && isUrlInternal(props.href))
    return (
      <Link
        href={props.href}
        className={classes}
        onClick={() => {
          const { pathname, search, hash } = window.location;
          if (props.href !== pathname + search + hash) startChange();
        }}
      >
        {props.children}
      </Link>
    );

  return (
    <a className={classes} {...props}>
      {props.children}
    </a>
  );
}

export default HeaderLink;
