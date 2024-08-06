// import { useEffect } from "react";
// const KakaoMap = () => {
//   useEffect(() => {
//     const mapContainer = document.getElementById("map"), // 지도를 표시할 div
//       mapOption = {
//         center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//         level: 3, // 지도의 확대 레벨
//       };

//     const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

//     // 마커가 표시될 위치입니다
//     const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

//     // 마커를 생성합니다
//     const marker = new kakao.maps.Marker({
//       position: markerPosition,
//     });

//     // 마커가 지도 위에 표시되도록 설정합니다
//     marker.setMap(map);
//   }, []);
//   return (
//     <div>
//       <div className="flex items-center justify-center pt-2">
//         <div id="map" className="w-[95%] h-72" />
//       </div>
//     </div>
//   );
// };

// export default KakaoMap;

import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_API ? process.env.KAKAOMAP_API : "41a5001fe49351cd96c8790bee5b25e2"}&autoload=false`;

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 37.555534, lng: 126.973734 }}
        style={{ width: "100%", height: "100%", borderRadius: "5px" }}
      >
        <MapMarker position={{ lat: 37.555534, lng: 126.973734 }}>
          <div className="text-sm text-brand font-bold text-center w-[150px]">
            QoQba
          </div>
        </MapMarker>
      </Map>
    </>
  );
};

export default KakaoMap;
