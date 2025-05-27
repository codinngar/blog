// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import { MenuBar } from "./MenuBar";

// export const Tiptap = () => {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: "<h1>Hello</h1>",
//     editorProps: {
//       attributes: {
//         class: "min-h-[200px] p-4 border rounded-md bg-white"
//       }
//     }
//   });

//   return (
//     <div className="p-12">
//       <MenuBar editor={editor} />
//       <EditorContent editor={editor} />
//     </div>
//   );
// };

"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { MenuBar } from "./MenuBar";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export const Tiptap = ({ content, onChange }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-3",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]  min-h-[156px] border border-t-0 rounded-b-md bg-white py-2 px-3",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
