import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBlogs, setBlogs, initialBlogPosts } from "../data/mockData";

// Initialize localStorage if empty
if (!localStorage.getItem("oiller_blogs")) {
  setBlogs(initialBlogPosts);
}

export const useBlogs = (options = {}) => {
  const { search = "", sort = "date", page = 1, limit = 6 } = options;

  return useQuery({
    queryKey: ["blogs", { search, sort, page, limit }],
    queryFn: () => {
      const blogs = getBlogs();

      // Filter by search
      let filtered = blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(search.toLowerCase()) ||
          blog.category.toLowerCase().includes(search.toLowerCase())
      );

      // Sort
      if (sort === "date") {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (sort === "title") {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
      }

      // Paginate
      const total = filtered.length;
      const totalPages = Math.ceil(total / limit);
      const start = (page - 1) * limit;
      const paginated = filtered.slice(start, start + limit);

      return {
        blogs: paginated,
        total,
        totalPages,
        currentPage: page,
      };
    },
  });
};

export const useBlog = (slug) => {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: () => {
      const blogs = getBlogs();
      const blog = blogs.find((b) => b.slug === slug);
      if (!blog) throw new Error("Blog not found");
      return blog;
    },
    enabled: !!slug,
  });
};

export const useFeaturedBlogs = (limit = 3) => {
  return useQuery({
    queryKey: ["blogs", "featured", limit],
    queryFn: () => {
      const blogs = getBlogs();
      return blogs
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
    },
  });
};

export const useRelatedBlogs = (currentSlug, limit = 2) => {
  return useQuery({
    queryKey: ["blogs", "related", currentSlug, limit],
    queryFn: () => {
      const blogs = getBlogs();
      const current = blogs.find((b) => b.slug === currentSlug);
      if (!current) return [];

      return blogs
        .filter(
          (b) => b.slug !== currentSlug && b.category === current.category
        )
        .slice(0, limit);
    },
    enabled: !!currentSlug,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newBlog) => {
      const blogs = getBlogs();
      const blog = {
        ...newBlog,
        id: Date.now(),
        slug: newBlog.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
        date: new Date().toISOString().split("T")[0],
      };
      setBlogs([blog, ...blogs]);
      return blog;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedBlog) => {
      const blogs = getBlogs();
      const index = blogs.findIndex((b) => b.id === updatedBlog.id);
      if (index === -1) throw new Error("Blog not found");

      blogs[index] = { ...blogs[index], ...updatedBlog };
      setBlogs(blogs);
      return blogs[index];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => {
      const blogs = getBlogs();
      const filtered = blogs.filter((b) => b.id !== id);
      setBlogs(filtered);
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
