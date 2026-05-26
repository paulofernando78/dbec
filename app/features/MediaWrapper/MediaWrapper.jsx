import styles from "./MediaWrapper.module.css";

import { MediaLayout } from "@/components/molecules/MediaLayout";
import { Image } from "@/components/atoms/Image";
import { Line } from "@/components/molecules/Line";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Carousel } from "@/components/molecules/Carousel";
import { dictionary } from "@/helpers/content";

const normalizeTokenValue = (value) => {
  if (value == null) return null;
  return Array.isArray(value) ? value : [value];
};

export const MediaWrapper = ({
  groups,
  mediaPosition = "left",
  img,
  imgSrc,
  imgAlt = "",
  ratio,
  carousel,
  instruction,
  line,
  lines,
  paragraph,
  paragraphs,
  tagAs = "span",
  children,
  className,
}) => {
  if (Array.isArray(groups) && groups.length > 0) {
    return (
      <div className="line-break">
        {groups.map((item, index) => (
          <MediaLayout
            key={index}
            mediaPosition={item.mediaPosition}
            className={item.className}
          >
            {item.imgSrc ? (
              <Image src={item.imgSrc} alt={item.imgAlt || ""} ratio={item.ratio} />
            ) : item.img ? (
              <Image
                src={dictionary(item.img)}
                alt={item.imgAlt || ""}
                width={250}
                height={250}
              />
            ) : item.carousel ? (
              <Carousel imgs={item.carousel} />
            ) : null}

            {item.children ? (
              item.children
            ) : item.line || item.lines || item.paragraph || item.paragraphs ? (
              <div>
                {item.instruction && (
                  <p className={styles.instruction}>
                    <b>{item.instruction}</b>
                  </p>
                )}
                {item.line && (
                  <Line as={item.tagAs || tagAs} value={normalizeTokenValue(item.line)} />
                )}
                {Array.isArray(item.lines) &&
                  item.lines.map((entry, entryIndex) => (
                    <Line
                      key={entryIndex}
                      as={item.tagAs || tagAs}
                      value={normalizeTokenValue(entry)}
                    />
                  ))}
                {item.paragraph && (
                  <Paragraph value={normalizeTokenValue(item.paragraph)} />
                )}
                {Array.isArray(item.paragraphs) &&
                  item.paragraphs.map((entry, entryIndex) => (
                    <Paragraph
                      key={entryIndex}
                      value={normalizeTokenValue(entry)}
                    />
                  ))}
              </div>
            ) : null}
          </MediaLayout>
        ))}
      </div>
    );
  }

  return (
    <MediaLayout mediaPosition={mediaPosition} className={className}>
      {imgSrc ? (
        <Image src={imgSrc} alt={imgAlt} ratio={ratio} />
      ) : img ? (
        <Image src={dictionary(img)} alt={imgAlt} width={250} height={250} />
      ) : carousel ? (
        <Carousel imgs={carousel} />
      ) : null}

      <div>
        {instruction && (
          <p className={styles.instruction}>
            <b>{instruction}</b>
          </p>
        )}
        {children ? (
          children
        ) : (
          <>
            {line && <Line as={tagAs} value={normalizeTokenValue(line)} />}
            {Array.isArray(lines) &&
              lines.map((item, index) => (
                <Line
                  key={index}
                  as={tagAs}
                  value={normalizeTokenValue(item)}
                />
              ))}
            {paragraph && (
              <Paragraph value={normalizeTokenValue(paragraph)} />
            )}
            {Array.isArray(paragraphs) &&
              paragraphs.map((item, index) => (
                <Paragraph
                  key={index}
                  value={normalizeTokenValue(item)}
                />
              ))}
          </>
        )}
      </div>
    </MediaLayout>
  );
};
