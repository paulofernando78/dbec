import { useEffect, useState } from "react";

import {
  GoogleClassroomAnnouncement,
  GoogleClassroomAssignment,
  GoogleClassroomMaterial,
} from "@/components/GoogleIcons";
import { Card } from "@/components/ui/Card";

export type ClassroomContent = {
  announcement?: { description: string };
  material?: { description?: string };
  assignment?: { title: string; description?: string };
};

type ClassroomLinksProps = {
  href: string;
  label: string;
  classroom?: ClassroomContent;
};

const postTypes = [
  {
    itemtype: "announcement",
    label: "New Announcement",
    Icon: GoogleClassroomAnnouncement,
  },
  {
    itemtype: "material",
    label: "Material",
    Icon: GoogleClassroomMaterial,
  },
  {
    itemtype: "assignment",
    label: "Assignment",
    Icon: GoogleClassroomAssignment,
  },
] as const;

export function ClassroomLinks({ href, label, classroom }: ClassroomLinksProps) {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(new URL(href, window.location.origin).toString());
  }, [href]);

  const getShareUrl = (itemtype: (typeof postTypes)[number]["itemtype"]) => {
    if (!pageUrl) return "";

    const url = new URL("https://classroom.google.com/share");
    const content = classroom?.[itemtype];

    url.searchParams.set("url", pageUrl);
    url.searchParams.set("itemtype", itemtype);

    if (itemtype !== "announcement") {
      url.searchParams.set(
        "title",
        itemtype === "assignment" && content && "title" in content
          ? content.title
          : label,
      );
    }

    if (content?.description) {
      url.searchParams.set("body", content.description);
    }

    return url.toString();
  };

  if (!pageUrl) return null;

  return (
    <Card className="mb-4 rounded-lg border border-gray-300 bg-gray-50">
      <div className="mb-2 flex items-center gap-2 text-gray-600">
        <img
          src="/assets/img/icons/google-classroom.svg"
          alt=""
          className="h-8 w-8 shrink-0"
        />
        <strong>Share to Classroom</strong>
      </div>
      <div className="flex flex-wrap gap-2">
        {postTypes.map(({ itemtype, label: postLabel, Icon }) => (
          <a
            key={itemtype}
            href={getShareUrl(itemtype)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-gray-300 bg-white p-2 font-semibold leading-none hover:border-gray-500 hover:bg-gray-50"
            aria-label={`Post ${label} to Google Classroom as ${postLabel}`}
          >
            <Icon className="shrink-0 text-gray-400" />
            <span>{postLabel}</span>
          </a>
        ))}
      </div>
    </Card>
  );
}
