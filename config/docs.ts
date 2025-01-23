import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    // {
    //   title: "Guides",
    //   href: "/guides",
    // },
    {
      title: "Guide",
      href: "/guide",
    },
    {
      title: "Reference",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
  ],
  sidebarNavGuide: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Welcome",
          href: "/guide",
        },
      ],
    },
    {
      title: "User Guide",
      items: [
        {
          title: "Installation",
          href: "/guide/installation",
        },
        {
          title: "Extensions",
          href: "/guide/extensions",
        },
      ]
    },
  ],
}
