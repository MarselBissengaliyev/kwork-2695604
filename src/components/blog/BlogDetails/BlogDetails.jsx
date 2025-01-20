"use client";

import Image from "next/image";
import { formatDateWithMonth } from "@/utils/formatDate";
import css from "./BlogDetails.module.scss";

export const BlogDetails = ({ post }) => {
  return (
    <div className={css.container + " tw-container"}>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} className={css.details + " tw-container"} />
    </div>
  );
};
