import { useEffect, useRef, useState } from "react";
import TailSearch2 from "../component/TailSearch2";
import TailCard2 from "../component/TailCard2";

export default function Gallery() {
  const kwRef = useRef();
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 확인 버튼 클릭
  const handleOk = (e) => {
    e.preventDefault();
    const kw = kwRef.current.value.trim();
    if (!kw) return alert("검색어를 입력하세요.");
    setKeyword(kw);
  };

  // 취소 버튼 클릭
  const handleCancel = (e) => {
    e.preventDefault();
    kwRef.current.value = "";
    setKeyword("");
    setData([]);
    setError(null);
  };

  useEffect(() => {
    if (!keyword) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=3%2BE64HB9bUOY0%2BkENLpf5w9Uk98vLoG4XULi9AjodZWxJpAFaeggyJGYnMdjYepgzAO%2Bjv%2FAty5BZhgDBQfdyw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURIComponent(
          keyword
        )}&_type=json`;

        const res = await fetch(url);
        const result = await res.json();

        setData(result.response.body.items?.item || []);
      } catch (err) {
        console.error(err);
        setError("데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <div className="flex flex-col items-center border border-gray-300 p-6 rounded-xl">
        <h2 className="font-bold text-xl mb-4">관광사진갤러리 키워드 검색</h2>

        <TailSearch kwRef={kwRef} onOk={handleOk} onCancel={handleCancel} />
      </div>

      <div className="mt-8">
        {loading && <p>⏳ 불러오는 중...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && keyword && data.length === 0 && (
          <p>검색 결과가 없습니다.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <TailCard
              key={item.galContentId}
              imgurl={item.galWebImageUrl}
              title={item.galTitle}
              subtitle={item.galPhotographyLocation || "장소 정보 없음"}
              content={item.galKeyword || "태그 없음"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
