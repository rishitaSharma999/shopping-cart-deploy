import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({ post }) => {
    return (
        <div style={{
          maxWidth: 'max-w-3xl',
          margin: '0 auto',
          width: '91.666667%'
        }}>
          
            <NavLink to={`/blog/${post.id}`}>
                <p style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  cursor: 'pointer',
                  color:'#dcdce3',
                }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
                    {post.title}
                </p>
            </NavLink>
            <p style={{
              fontSize: '0.875rem',
              margin: '0.25rem 0',
              color:'#9d9da1'
            }}>
                By <span style={{
                  fontStyle: 'italic',
                  color:'#9d9da1'
                }}>{post.author}</span> on{"  "}
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span style={{
                      fontWeight: '600',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      color:'#dcdce3',
                    }}>{post.category}</span>
                </NavLink>
            </p>
            <p style={{
              fontSize: '0.875rem',
              color:'#9d9da1'
            }}>Posted On {post.date}</p>
            <p style={{
              marginTop: '1rem',
              marginBottom: '0.5rem',
              color:'#9d9da1',
            }}>{post.content}</p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              alignItems: 'center',
              color:'#9d9da1',
            }}>
                {post.tags.map((tag,index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span style={{
                          color: '#dcdce3',
                          fontWeight: '600',
                          fontSize: '0.75rem',
                          textDecoration: 'underline',
                          cursor: 'pointer'
                        }}> #{tag}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails