import BlogSection from "@/components/sections/blog-section";
import { getBlogPosts } from "@/lib/api/get-blog-posts";

export default async function Blog() {
  const blogPosts = await getBlogPosts({
    limit: false,
  });
  return <BlogSection blogPosts={blogPosts} isPage />;
}