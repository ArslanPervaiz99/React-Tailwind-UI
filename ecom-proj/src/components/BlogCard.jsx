const BlogCard = ({ img, title, comment, date }) => {
  return (
    <div className="space-y-4 hover:scale-95 transition-transform">
      <img src={img} alt="post" />
      <div className="text-accent font-medium">
        <span>{date}</span>
        <span>{comment} Comments</span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
};

export default BlogCard;
