import * as React from "react";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const IconPentagon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {

  const { className, size = 800 } = props;

  return (
    <div className="inline-flex relative">
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        width="82"
        height="72"
        className={twMerge("text-primary-foreground/10 -rotate-6", className)}
        style={{
          height: size,
          width: size,
        }}
        {...props}
      >
        <path d="M7.685 1.545a.5.5 0 01.63 0l6.263 5.088a.5.5 0 01.161.539l-2.362 7.479a.5.5 0 01-.476.349H4.099a.5.5 0 01-.476-.35L1.26 7.173a.5.5 0 01.161-.54l6.263-5.087zm8.213 5.28a.5.5 0 00-.162-.54L8.316.257a.5.5 0 00-.631 0L.264 6.286a.5.5 0 00-.162.538l2.788 8.827a.5.5 0 00.476.349h9.268a.5.5 0 00.476-.35l2.788-8.826z" />
      </svg>
    </div>
  );
};
