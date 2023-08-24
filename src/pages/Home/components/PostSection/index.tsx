import Jdenticon from "../../../../components/Jdenticon";
import { formatTimestamp } from "../../../../helpers";



const PostSection: React.FC<Post> = (post) => {

    return <section className="rounded-lg bg-zinc-800 ring-1 ring-zinc-700 py-6 px-5" style={{ flex: post.createdAt }}>
        <div className="grid grid-cols-[max-content_auto] grid-rows-[min-content_min-content] gap-y-1 gap-x-4">
            <span className="h-11 w-11 rounded-full p-2 col-start-1 col-end-2 row-start-1 row-end-[-1] ring-1 ring-zinc-600 self-center shadow-[0_0_4px_var(--tw-ring-color)_inset]">
                <Jdenticon size={28} value={post.user} />
            </span>
            <h4 className="text-base text-gray-300 font-medium">{post.user}</h4>
            <p className="text-sm text-gray-500 font-medium">{formatTimestamp(new Date(post.createdAt))}</p>
        </div>
        <div className="p-4 pr-8 bg-zinc-900 rounded-lg flex items-start gap-4 focus-within:ring-1 focus-within:ring-blue-500 mt-5 whitespace-pre-line">
            <span className="text-lg leading-none p-4 rounded-full bg-zinc-800 h-12 w-12 inline-grid place-content-center select-none cursor-pointer transition-all hover:bg-zinc-700 hover:shadow-md hover:shadow-white/10">
                {post.status}
            </span>
            <p className="self-center flex-1">{post.text}</p>
        </div>
    </section>
}

export default PostSection;