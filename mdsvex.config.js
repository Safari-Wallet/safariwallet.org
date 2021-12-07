import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default {
    extensions: [`svelte`, `.md`],
        rehypePlugins: [
        rehypeSlug,
        [
            rehypeAutolinkHeadings,
            {
                behavior: `wrap`,
            }
        ]
    ],
    remarkPlugins: [
        [
            remarkGithub,
            {
                repository: `https://github.com/Safari-Wallet/safariwallet.org.git`,
            }
        ],
        remarkAbbr
    ],
    smartypants: {
        dashes: `oldschool`,
    },
};
