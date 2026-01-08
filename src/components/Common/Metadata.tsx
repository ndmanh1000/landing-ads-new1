"use client";

import { useEffect } from "react";

export default function Metadata() {
    useEffect(() => {
        // Update URLs dynamically based on current hostname
        if (typeof window !== "undefined") {
            const baseUrl = `${window.location.protocol}//${window.location.host}`;
            const thumbnailUrl = `${baseUrl}/images/logo/Thumbnail.jpeg`;

            // Update or create meta tags
            const updateMetaTag = (
                property: string,
                content: string,
                isProperty: boolean = true
            ) => {
                const attribute = isProperty ? "property" : "name";
                let meta = document.querySelector(
                    `meta[${attribute}="${property}"]`
                ) as HTMLMetaElement;

                if (!meta) {
                    meta = document.createElement("meta");
                    meta.setAttribute(attribute, property);
                    document.head.appendChild(meta);
                }
                meta.content = content;
            };

            // Update Open Graph image and URL with full absolute URL
            updateMetaTag("og:image", thumbnailUrl);
            updateMetaTag("og:url", baseUrl);
            updateMetaTag("og:image:secure_url", thumbnailUrl);

            // Update Twitter image and URL with full absolute URL
            updateMetaTag("twitter:image", thumbnailUrl);
            updateMetaTag("twitter:url", baseUrl);

            // Update primary meta image
            updateMetaTag("image", thumbnailUrl, false);
        }
    }, []);

    return null;
}

