# Adding images to your portfolio

Place your image files in this folder (`public/images/`). They will be available at `/images/your-file.jpg` in the app.

## Suggested files

| File name           | Where it appears        |
|---------------------|-------------------------|
| `profile.jpg`       | Hero section (your photo) |
| `project-unleft.jpg`| UNLEFT project card     |
| `project-eduplex.jpg` | Eduplex DIU project card |

You can use other names; if you do, update the paths in:

- **Profile photo:** `components/Hero.tsx` — change `src="/images/profile.jpg"` to your filename.
- **Project images:** `components/Projects.tsx` — change the `image` property for each project in the `projects` array.

## Using images elsewhere

- **Path:** Always use paths starting with `/images/...` (no `public` in the path).
- **Next.js Image (recommended):**  
  `import Image from "next/image";`  
  `<Image src="/images/photo.jpg" alt="..." width={400} height={300} />`  
  Or with `fill` inside a container with `position: relative`.
- **Regular img:**  
  `<img src="/images/photo.jpg" alt="..." />`

Supported formats: JPG, PNG, WebP, GIF, AVIF.
