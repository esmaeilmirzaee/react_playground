
export default function CardItem({ name = '', content = '' }) {
  return (
    <>
      <figure className="bg-gray-100 rounded-xl p-8 w-96">
        <img className="w-32 h-32 rounded-full mx-auto" src="https://place-puppy.com/300x300" alt="" width="384" height="512" />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              {content}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">
              {name}
            </div>
            <div className="text-gray-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}