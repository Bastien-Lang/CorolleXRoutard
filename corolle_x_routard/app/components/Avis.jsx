import Cta from "./Cta";
import Title from "./Title";

export default function Avis(){
    const reviews = [
  {
    id: 1,
    username: "@MrHounsou",
    avatar: "/avatars/mrhounsou.png",
    content: "Génial mes enfants sont refaits merci pour cette collab !!!",
    rating: 4.5,
  },
  {
    id: 2,
    username: "@Keti_prime",
    avatar: "/avatars/keti.png",
    content:
      "C’est génial j’adore, c’est très important les poupées Corolle.",
    rating: 4,
  },
  {
    id: 3,
    username: "@Christinette59",
    avatar: "/avatars/christine.png",
    content:
      "Incroyable !!! La collab que j’attendais. Heureusement que le père Noël a ramené une poupée Lily à ma fille, elle ne la quitte plus ! Vous assurez",
    rating: 5,
  },
];

    return(
        <section className="flex flex-col justify-center w-full max-lg:h-auto py-16">
            <div className="relative bg-[#DF4585] pb-[50] h-[25vh] w-full flex justify-center items-center">
                <Title className="text-[5em] text-center max-lg:text-3xl text-white text-center">Avis des clients</Title>
                <img className="absolute bottom-[-3] right-0" src="/vector2.png" alt="vector" />
            </div>
            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
                ))}
            </div>
            <div className="mt-20 flex justify-center">
                <Cta>Laisser un avis</Cta>
            </div>
        </section>
    )
}

function Stars({ rating }) {
  return (
    <div className="flex gap-1 mt-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-2xl ${
            rating >= i + 1 ? "text-yellow-400" : "text-yellow-200"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-sm">
      <div className="flex items-center gap-4">
        <img
          src={review.avatar}
          alt=""
          className="w-12 h-12 rounded-xl object-cover"
        />
        <span className="font-bold text-lg text-[#3A1F16]">
          {review.username}
        </span>
      </div>

      <p className="text-[#3A1F16] leading-relaxed">
        {review.content}
      </p>

      <Stars rating={review.rating} />
    </article>
  );
}
