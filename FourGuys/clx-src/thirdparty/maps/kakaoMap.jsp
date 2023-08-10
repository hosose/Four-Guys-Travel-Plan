<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<!-- jquery 사용 -->
<script src="http://code.jquery.com/jquery-latest.js"></script> 
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<table>
			<tr>
				<td>주소</td>
				<td><input type="text" id="address"></td>
				<td><button type="button" id="searchBtn">검색</button></td>
			</tr>
		</table>
		<div id="map" style="width:100%;height:350px;"></div>
   
	<!-- kakao API -->
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4703e8ce93fa0f57283e362bfab3e9f4&libraries=services"></script>
	<script>
	function jspReceiveValueToClx() {
	    /* eXBuilder6에서 setPageProperty API를 통해 설정된 변수 판별 */
	    if (_ownerApp) {
	        /* 해당 변수는 앱 객체이므로, eXBuilder6에서 ID가 'ipbClxToJspValue'인 컨트롤의 value를 jsp에서 ID가 'ipbJspValue'인 태그의 value에 대입 */
	        document.getElementById("address").setAttribute("value", _ownerApp.lookup("ipbClxToJspValue")lookup("grd2").getSelectedRow().getValue("addr1"));
	    } else {
	        alert("eXBuilder6 화면으로부터 전달받은 app 객체가 존재하지 않습니다.");
	    }
	}
	var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	    mapOption = {
	        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
	        level: 3 // 지도의 확대 레벨
	    };  
	
	
	$('#searchBtn').click(function(){
		// 버튼을 click했을때
		
		// 지도를 생성합니다    
		var map = new kakao.maps.Map(mapContainer, mapOption); 
		
		// 주소-좌표 변환 객체를 생성합니다
		var geocoder = new kakao.maps.services.Geocoder();
		
		// 주소로 좌표를 검색합니다
		geocoder.addressSearch($('#address').val(), function(result, status) {
	
		    // 정상적으로 검색이 완료됐으면 
		     if (status === kakao.maps.services.Status.OK) {
		        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
		        
		        // 결과값으로 받은 위치를 마커로 표시합니다
		        var marker = new kakao.maps.Marker({
		            map: map,
		            position: coords
		        });
	
		        // 인포윈도우로 장소에 대한 설명을 표시합니다
		        var infowindow = new kakao.maps.InfoWindow({
		            content: '<div style="width:150px;text-align:center;padding:6px 0;">장소</div>'
		        });
		        infowindow.open(map, marker);
	
		        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
		        map.setCenter(coords);
		    } 
		});  
	});
	  
	</script>
</body>
</html>