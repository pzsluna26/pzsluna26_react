export default function TailCard({ data, loading, error, keyword }) {
  if (loading) return <p>불러오는 중...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!keyword) return;
  if (!data || data.length === 0) return <p>검색 결과가 없습니다.</p>;

  
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {data.map((item) => (
        <div key={item.galContentId} className="border border-gray-300 rounded-lg p-3 shadow">
          <img
            src={item.galWebImageUrl}
            alt={item.galTitle}
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="font-bold mt-3">{item.galTitle}</h3>
          <p className="text-sm text-gray-500">{item.galPhotographyLocation}</p>
          <p className="text-xs text-gray-500 mb-3">{item.galSearchKeyword}</p>
        </div>
      ))}
    </div>
  );
}
