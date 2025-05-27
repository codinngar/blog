import { useState } from "react";
import RichTextEditor from "reactjs-tiptap-editor";
import { BaseKit } from "reactjs-tiptap-editor";
import { Blockquote } from "reactjs-tiptap-editor/blockquote";
import { Bold } from "reactjs-tiptap-editor/bold";
import { BulletList } from "reactjs-tiptap-editor/bulletlist";
import { Clear } from "reactjs-tiptap-editor/clear";
import { Code } from "reactjs-tiptap-editor/code";
import { CodeBlock } from "reactjs-tiptap-editor/codeblock";
import { Color } from "reactjs-tiptap-editor/color";
import { Document } from "reactjs-tiptap-editor/document";
import { FontFamily } from "reactjs-tiptap-editor/fontfamily";
import { FontSize } from "reactjs-tiptap-editor/fontsize";
import { FormatPainter } from "reactjs-tiptap-editor/formatpainter";
import { Heading } from "reactjs-tiptap-editor/heading";
import { Highlight } from "reactjs-tiptap-editor/highlight";
import { History } from "reactjs-tiptap-editor/history";
import { HorizontalRule } from "reactjs-tiptap-editor/horizontalrule";
import { Iframe } from "reactjs-tiptap-editor/iframe";
import { Image } from "reactjs-tiptap-editor/image";
import { Indent } from "reactjs-tiptap-editor/indent";
import { Italic } from "reactjs-tiptap-editor/italic";
import { LineHeight } from "reactjs-tiptap-editor/lineheight";
import { Link } from "reactjs-tiptap-editor/link";
import { ListItem } from "reactjs-tiptap-editor/listitem";
import { MoreMark } from "reactjs-tiptap-editor/moremark";
import { ColumnActionButton } from "reactjs-tiptap-editor/multicolumn";
import { OrderedList } from "reactjs-tiptap-editor/orderedlist";
import { Selection } from "reactjs-tiptap-editor/selection";
import { SlashCommand } from "reactjs-tiptap-editor/slashcommand";
import { Strike } from "reactjs-tiptap-editor/strike";
import { SubAndSuperScript } from "reactjs-tiptap-editor/subandsuperscript";
import { Table } from "reactjs-tiptap-editor/table";
import { TaskList } from "reactjs-tiptap-editor/tasklist";
import { TextAlign } from "reactjs-tiptap-editor/textalign";
import { TextBubble } from "reactjs-tiptap-editor/textbubble";
import { TrailingNode } from "reactjs-tiptap-editor/trailingnode";
import { TextUnderline } from "reactjs-tiptap-editor/textunderline";
import { Video } from "reactjs-tiptap-editor/video";
import { SearchAndReplace } from "reactjs-tiptap-editor/searchandreplace";
import { Emoji } from "reactjs-tiptap-editor/emoji";
import { Katex } from "reactjs-tiptap-editor/katex";
import { ExportPdf } from "reactjs-tiptap-editor/exportpdf";
import { ExportWord } from "reactjs-tiptap-editor/exportword";
import { TableOfContents } from "reactjs-tiptap-editor/tableofcontent";
import { TextDirection } from "reactjs-tiptap-editor/textdirection";
import { Mention } from "reactjs-tiptap-editor/mention";
import { Attachment } from "reactjs-tiptap-editor/attachment";
import { Mermaid } from "reactjs-tiptap-editor/mermaid";
import { Drawer } from "reactjs-tiptap-editor/drawer";

import "reactjs-tiptap-editor/style.css";
import "prism-code-editor-lightweight/layout.css";
import "prism-code-editor-lightweight/themes/github-dark.css";
import "react-image-crop/dist/ReactCrop.css";
import "katex/dist/katex.min.css";
import "easydrawer/styles.css";

const extensions = [
  BaseKit,
  Blockquote,
  Bold,
  BulletList,
  Clear,
  Code,
  CodeBlock,
  Color,
  Document,
  FontFamily,
  FontSize,
  FormatPainter,
  Heading,
  Highlight,
  History,
  HorizontalRule,
  Iframe,
  Mermaid,
  Katex,
  ExportPdf,
  TextDirection,
  Indent,
  Italic,
  LineHeight,
  Link,
  ListItem,
  MoreMark,
  ColumnActionButton,
  OrderedList,
  Selection,
  SlashCommand,
  Strike,
  SubAndSuperScript,
  Table,
  TaskList,
  TextAlign,
  TextBubble,
  TrailingNode,
  TextUnderline,
  SearchAndReplace,
  Emoji,
  ExportWord,
  TableOfContents,
  Mention,
  Image.configure({
    upload: (files) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files));
        }, 500);
      });
    },
  }),
  Video.configure({
    upload: (files) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files));
        }, 500);
      });
    },
  }),
  Attachment.configure({
    upload: (file) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(file));
        }, 500);
      });
    },
  }),
  Drawer.configure({
    upload: (file) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(file));
        }, 500);
      });
    },
  }),
];

export function TextEditor() {
  const [content, setContent] = useState("");

  const onChangeContent = (value) => {
    setContent(value);
  };

  return (
    <RichTextEditor
      output="html"
      content={content}
      onChangeContent={onChangeContent}
      extensions={extensions}
    />
  );
}
