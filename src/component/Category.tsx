const Category = () => {
  const categories = [
    {id: 1, title: "MAN", src: 'https://i.im.ge/2024/03/05/8xD03W.2e70fda48e4ae2f3e7baa152be26c958-removebg-preview.png'},
    {id: 1, title: "WOMAN", src: 'https://i.im.ge/2024/03/05/8xD540.799d44361e392aaadb520ef63f65e92e-removebg-preview.png'},
    {id: 1, title: "KIDS", src: 'https://i.im.ge/2024/03/05/8xDjsT.86625d8d21f426281f6c2f0fda1cb0c6-removebg-preview.png'},
  ]
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">CATEGORIES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 mx-8 mb-16 md:mx-12 lg:mx-20">
        {categories.map(({ id, title, src }) => (
          <div className=" relative aspect-square overflow-hidden w-full cursor-pointer bg-gray-300 rounded-2xl transition hover:scale-105 text-center px-4" key={id}>
            <img src={src} alt="category" className="w-full h-full object-contain" />
            <div className="absolute max-w-[250px] bottom-8">
              <h2 className="text-white font-bold text-4xl mb-2">{title}</h2>
              <button className='bg-white px-6 py-2 rounded-full w-full'>See Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category