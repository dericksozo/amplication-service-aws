using Microsoft.EntityFrameworkCore;

namespace Blog_2.Infrastructure;

public class Blog_2DbContext : DbContext
{
    public Blog_2DbContext(DbContextOptions<Blog_2DbContext> options)
        : base(options) { }
}
