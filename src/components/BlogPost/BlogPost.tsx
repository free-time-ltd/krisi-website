import render, { domToReact } from "html-react-parser";
import styles from "./styles.module.css";

interface Props {
  post: any;
}

const BlogPost = ({ post }: Props) => (
  <div className={`${styles["KpBlogPost-root"]}`}>
    {render(post.content, {
      replace(domNode) {
        if (domNode.name === "a") {
          const href = new URL(domNode.attribs.href);
          if (href.origin !== process.env.NEXT_PUBLIC_APP_URL) {
            return (
              <a href={domNode.attribs.href} target="_blank">
                {domToReact(domNode.children)}
              </a>
            );
          }
        } else if (domNode.name === "h1") {
          return (
            <h2 {...domNode.cloneNode[Symbol].attribs}>
              {domToReact(domNode.children)}
            </h2>
          );
        }
      },
    })}
  </div>
);

export default BlogPost;
