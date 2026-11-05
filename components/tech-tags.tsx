export function TechTags({ tags }: { tags: string[] }) {
  return (
    <div className='mt-3 flex flex-wrap gap-1.5'>
      {tags.map((tag) => (
        <span
          key={tag}
          className='text-xs px-2 py-0.5 rounded-sm bg-umber-100 text-umber-400'
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
