
export default function CardItem({ name = '', content = '' }) {
  return (
    <>
      <figure class="bg-gray-100 rounded-xl p-8 w-96">
        <img class="w-32 h-32 rounded-full mx-auto" src="https://place-puppy.com/300x300" alt="" width="384" height="512" />
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-semibold">
              {content}
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-cyan-600">
              {name}
            </div>
            <div class="text-gray-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}