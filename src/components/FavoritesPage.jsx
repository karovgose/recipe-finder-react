import RecipeCard from './RecipeCard';

export default function FavoritesPage() {
  const fav = JSON.parse(localStorage.getItem('favorites')) || [];
  return (
    <div className="flex-1 bg-[#faf9fb] p-10 min-h-screen ">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="font-bold text-3xl md:text-5xl my-4">My Favorites</h2>
        {!fav ? (
          <div className="h-[80v] flex flex-col items-center gap-4">
            <img src="/404.svg" className="h-3/4" alt="page not found image" />
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {fav.map((recipe) => (
              <RecipeCard key={recipe.label} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
