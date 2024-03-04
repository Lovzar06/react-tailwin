const Card = (probs) => {
  return (
<div
className="xl m-5 flex h-auto w-[15rem] flex-col items-center rounded-lg border-2 border-red-500 bg-red-500 shadow-xl shadow-red-500"
key={probs.id}
>
<img
    className="center h-[10rem] w-full rounded-t-lg object-cover"
    src={probs.img}
    alt=""
/>
<h2 className="text-2xl font-bold">
    {probs.name}
</h2>
<h3 className="text-xl font-medium">
    {probs.nickname}
</h3>
<p>{probs.position}</p>
<p>{probs.bounty}</p>
</div>

  )
}

export default Card


