import { slugify } from "@/lib/utils";

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  // Parse markdown-like content and render as HTML
  const parseContent = (rawContent: string) => {
    const lines = rawContent.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let listType: "ul" | "ol" | null = null;

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag key={`list-${elements.length}`} className="my-4 ml-6 space-y-2">
            {currentList.map((item, idx) => (
              <li key={idx} className="text-muted-foreground">
                {parseInline(item)}
              </li>
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    const parseInline = (text: string): React.ReactNode => {
      // Bold
      text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      // Italic
      text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
      // Code
      text = text.replace(/`(.+?)`/g, "<code class='bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary'>$1</code>");
      
      return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Empty line
      if (!trimmedLine) {
        flushList();
        return;
      }

      // H2
      if (trimmedLine.startsWith("## ")) {
        flushList();
        const title = trimmedLine.replace("## ", "");
        const id = slugify(title);
        elements.push(
          <h2
            key={index}
            id={id}
            className="mt-10 mb-4 text-2xl font-bold tracking-tight scroll-mt-20"
          >
            {title}
          </h2>
        );
        return;
      }

      // H3
      if (trimmedLine.startsWith("### ")) {
        flushList();
        const title = trimmedLine.replace("### ", "");
        const id = slugify(title);
        elements.push(
          <h3
            key={index}
            id={id}
            className="mt-8 mb-3 text-xl font-semibold tracking-tight scroll-mt-20"
          >
            {title}
          </h3>
        );
        return;
      }

      // H4
      if (trimmedLine.startsWith("#### ")) {
        flushList();
        const title = trimmedLine.replace("#### ", "");
        const id = slugify(title);
        elements.push(
          <h4
            key={index}
            id={id}
            className="mt-6 mb-2 text-lg font-semibold scroll-mt-20"
          >
            {title}
          </h4>
        );
        return;
      }

      // Unordered list
      if (trimmedLine.startsWith("- ")) {
        if (listType !== "ul") {
          flushList();
          listType = "ul";
        }
        currentList.push(trimmedLine.replace("- ", ""));
        return;
      }

      // Ordered list
      if (/^\d+\.\s/.test(trimmedLine)) {
        if (listType !== "ol") {
          flushList();
          listType = "ol";
        }
        currentList.push(trimmedLine.replace(/^\d+\.\s/, ""));
        return;
      }

      // Blockquote
      if (trimmedLine.startsWith("> ")) {
        flushList();
        elements.push(
          <blockquote
            key={index}
            className="border-l-4 border-primary bg-muted/30 px-6 py-4 my-6 rounded-r-xl italic text-muted-foreground"
          >
            {trimmedLine.replace("> ", "")}
          </blockquote>
        );
        return;
      }

      // Code block (simple detection)
      if (trimmedLine.startsWith("```")) {
        flushList();
        // Skip code block markers for now
        return;
      }

      // Regular paragraph
      flushList();
      elements.push(
        <p key={index} className="my-4 text-muted-foreground leading-relaxed text-lg">
          {parseInline(trimmedLine)}
        </p>
      );
    });

    flushList();
    return elements;
  };

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      {parseContent(content)}
    </div>
  );
}
