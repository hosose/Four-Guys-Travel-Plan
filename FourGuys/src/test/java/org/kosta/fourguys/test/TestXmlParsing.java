package org.kosta.fourguys.test;

import java.io.File;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.junit.jupiter.api.Test;
import org.kosta.fourguys.mapper.AreaMapper;
import org.kosta.fourguys.vo.AreaVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

@SpringBootTest
public class TestXmlParsing {
	@Autowired
	AreaMapper areaMapper;

	@Test
	public void xmlParsing() {
		try {
			File file = new File(
					"C:\\Users\\USER\\git\\Four-Guys-Travel-Plan\\FourGuys\\src\\main\\java\\org\\kosta\\fourguys\\xml\\JEJU.xml");
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
			DocumentBuilder db = dbf.newDocumentBuilder();
			Document document = db.parse(file);
			document.getDocumentElement().normalize();
			NodeList nList = document.getElementsByTagName("item");
			for (int temp = 0; temp < 100; temp++) {
				Node nNode = nList.item(temp);
				if (nNode.getNodeType() == Node.ELEMENT_NODE) {
					Element eElement = (Element) nNode;
					AreaVO areaVO = new AreaVO();
					areaVO.setAddr1(eElement.getElementsByTagName("addr1").item(0).getTextContent());
					areaVO.setAddr2(eElement.getElementsByTagName("addr2").item(0).getTextContent());
					areaVO.setCat1(eElement.getElementsByTagName("cat1").item(0).getTextContent());
					areaVO.setCat2(eElement.getElementsByTagName("cat2").item(0).getTextContent());
					areaVO.setCat3(eElement.getElementsByTagName("cat3").item(0).getTextContent());
					areaVO.setContentid(
							Integer.parseInt(eElement.getElementsByTagName("contentid").item(0).getTextContent()));
					areaVO.setFirstimage(eElement.getElementsByTagName("firstimage").item(0).getTextContent());
					areaVO.setMapx(eElement.getElementsByTagName("mapx").item(0).getTextContent());
					areaVO.setMapy(eElement.getElementsByTagName("mapy").item(0).getTextContent());
					areaVO.setTel(eElement.getElementsByTagName("tel").item(0).getTextContent());
					areaVO.setTitle(eElement.getElementsByTagName("title").item(0).getTextContent());
					areaMapper.registerArea(areaVO);
				}
			}
		} catch (IOException | ParserConfigurationException | SAXException e) {
			System.out.println(e);
		}
	}
}
