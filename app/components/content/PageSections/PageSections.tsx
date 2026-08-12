import {
  Children,
  isValidElement,
  type ElementType,
  type ReactNode,
  type ReactElement,
} from "react";

import { TableOfContents } from "@/components/content/TableOfContents";
import { formatSectionLabel } from "@/utils/formatSectionLabel";

type SectionElementProps = {
  id: string;
  label?: string;
  tocTitle?: string;
  iconClassName?: string;
  tocItemClassName?: string;
  tocContentAfter?: ReactNode;
};

type PageSectionsProps = {
  children: ReactNode;
  title?: ReactNode;
  headerIcon?: ElementType;
  itemIcon?: ElementType;
  headerIconClassName?: string;
  itemIconClassName?: string;
};

export const PageSections = ({
  children,
  title,
  headerIcon,
  itemIcon,
  headerIconClassName,
  itemIconClassName,
}: PageSectionsProps) => {
  // Convert children into a normal array and keep only valid React elements
  const childArray = Children.toArray(children).filter(
    isValidElement,
  ) as ReactElement<SectionElementProps>[];

  const items = childArray
    // Keep only Section components
    .filter((child) => {
      if (typeof child.type === "string") {
        return false;
      }

      return (
        "displayName" in child.type && child.type.displayName === "Section"
      );
    })
    .map((child) => ({
      // This becomes the anchor target in TableOfContents: href="#audio-player"
      href: child.props.id,
      // Use the custom label if it exists, otherwise build one from the id
      label: child.props.label ?? formatSectionLabel(child.props.id),
      title: child.props.tocTitle,
      iconClassName: child.props.iconClassName,
      className: child.props.tocItemClassName,
      contentAfter: child.props.tocContentAfter,
    }));

  return (
    <>
      {/* Build the TableOfContents menu automatically from the Section components */}
      <TableOfContents
        title={title}
        items={items}
        headerIcon={headerIcon}
        itemIcon={itemIcon}
        headerIconClassName={headerIconClassName}
        itemIconClassName={itemIconClassName}
      />

      {/* Render the original sections below the TableOfContents */}
      {children}
    </>
  );
};

// What PageSections is doing:

// receives all the JSX inside it as children
// turns those children into an array
// keeps only the ones that are Section
// reads each section’s id and optional label
// creates the items array for TableOfContent
// renders TableOfContent
// then renders the sections normally
