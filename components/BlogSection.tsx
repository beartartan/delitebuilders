const posts = [
  /* {
    title: "Delite Alpha-3 Testnet is Live",
    href: "https://delite.mirror.xyz/wD7yN8Y5RttbP7kzdtX22GbMg6i18a-Xwet2sshpt48",
    description:
      "Today we’re excited to share that the Delite alpha-3 testnet, Grímsvötn, is live! This is the next step on the road to a decentralized, Ethereum-equivalent ZK-EVM.",
    date: "Jun 07, 2023",
    datetime: "2023-06-07",
    imageUrl:
      "https://mirror-media.imgix.net/publication-images/LtyEm5huf-mf9854QWh3o.jpeg?height=800&width=1600&h=800&w=1600&auto=compress",
    readingTime: "9 min",
    author: {
      name: "finestone",
      imageUrl: "https://avatars.githubusercontent.com/u/36642873?s=96&v=4",
    },
  },
  {
    title: "ZK-Roller-Coaster #6",
    href: "https://delite.mirror.xyz/7BwxX8eR_dW2jihpAk6V10X4qKG0X7NKs_l3Me1pLNs",
    description:
      "This is the 6th edition of ZK-Roller-Coaster where we track and investigate the most exciting, meaningful, and crazy ZK-stuff of the prior two weeks.",
    date: "Jun 05, 2023",
    datetime: "2023-06-05",
    imageUrl:
      "https://mirror-media.imgix.net/publication-images/7k-D6I4_UEfNkR4lsx5Fk.png?height=2048&width=4096&h=2048&w=4096&auto=compress",
    readingTime: "4 min",
    author: {
      name: "Lisa A.",
      imageUrl: "https://avatars.githubusercontent.com/u/106527861?v=4",
    },
  },
  {
    title: "Community invite: help craft the ZK-research digest",
    href: "https://delite.mirror.xyz/lezTMMMoog57VnYwiUWiw4Ng_mX19WCMOpPW-W-xcM0",
    description:
      "We are starting an open research community to collaborate on the creation of the ZK research digest and share rare discoveries and valuable content to learn, grow and build together.",
    date: "May 29, 2023",
    datetime: "2023-05-29",
    imageUrl:
      "https://mirror-media.imgix.net/publication-images/8RANXhY7FVaW8C9acbamg.png?height=512&width=1024&h=512&w=1024&auto=compress",
    readingTime: "3 min",
    author: {
      name: "Lisa A.",
      imageUrl: "https://avatars.githubusercontent.com/u/106527861?v=4",
    },
  }, */
];

export default function BlogSection() {
  return (
    <div className="relative bg-neutral-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 dark:bg-neutral-900">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3 dark:bg-neutral-900" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-grotesk text-3xl tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
            Latest blog posts
          </h2>
          <div className="mx-auto mt-3 max-w-2xl text-xl text-neutral-500 sm:mt-4 dark:text-neutral-300">
            Check out the full blog at{" "}
            <a
              className="underline"
              href="https://delite.mirror.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              delite.mirror.xyz
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-54 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-neutral-800 dark:hover:bg-neutral-700">
                  <div className="flex-1">
                    <div className="mt-2 block">
                      <div className="text-xl font-semibold text-neutral-900 dark:text-neutral-200">
                        {post.title}
                      </div>
                      <div className="mt-3 text-base text-neutral-500 dark:text-neutral-300 line-clamp-3">
                        {post.description}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-[#e81899]">
                        {post.author.name}
                      </div>
                      <div className="flex space-x-1 text-sm text-neutral-500 dark:text-neutral-400">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
