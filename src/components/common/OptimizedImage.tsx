"use client";

import Image from "next/image";
import { Box, SxProps, Theme } from "@mui/material";

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  sx?: SxProps<Theme>;
  className?: string;
  objectFit?: "cover" | "contain";
}

export default function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  sizes,
  sx,
  className,
  objectFit = "cover",
}: OptimizedImageProps) {
  if (fill) {
    return (
      <Box
        sx={{ position: "relative", overflow: "hidden", width: "100%", height: "100%", ...sx }}
        className={className}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          style={{ objectFit }}
        />
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative", lineHeight: 0, ...sx }} className={className}>
      <Image
        src={src}
        alt={alt}
        width={width ?? 800}
        height={height ?? 600}
        priority={priority}
        sizes={sizes}
        style={{ width: "100%", height: "auto", objectFit }}
      />
    </Box>
  );
}
