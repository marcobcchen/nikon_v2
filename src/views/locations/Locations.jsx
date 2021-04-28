import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Select from 'react-dropdown-select';
import {
  StyledWrapper,
  StyledContainer,
  StyledSuperTitle,
} from '@/components/Global/';
import { LocationsData, ShopData } from '@/data/';
import {
  StyledLocationsConatiner, StyledMapContainer, StyledController, StyledMap,
  StyledMapMarker,
} from './style';
import ShopInfo from './ShopInfo';
import MapStyle from './mapStyle';

const StyledSelect = styled(Select)`
  min-height: 44px !important;
  background-color: ${({ theme }) => theme.color.primary};
  color: #fff;
  padding: 8px !important;

  .react-dropdown-select-input{
    font-size: 14px;
    width: 20%;
    margin-left: 0;
  }

  .react-dropdown-select-item {
    border-bottom: 1px solid #2d3139;
    background-color: ${({ theme }) => theme.color.primary};
    color: #fff;
    font-size: 14px;
    padding: 8px 15px;

    &:hover {
      background-color: #2d3139;
      color: #ffffff80;
    }
  }

  .react-dropdown-select-content{
    font-size: 14px;
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    border-bottom: 1px solid #2d3139;
    background-color: #2d3139;
  }

  .react-dropdown-select-dropdown-handle{
    svg{
      fill: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const GOOGLE_MAP_API_KEY = 'AIzaSyCETbdHb2ETD9PAQ086JgtYE6p_ItV1za4';

function Locations() {
  const [center, setCenter] = useState({});
  const [info, setInfo] = useState({});
  const [shopData, setShopData] = useState([]);
  const [shopValue, setShopValue] = useState([]);
  const [showMarker, setShowMarker] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleApiLoaded = (map, maps) => {
    console.log(map, maps);
  };

  const handleLocations = (value) => {
    const locationId = value[0].id;
    const shoplist = ShopData.filter((data) => data.id === locationId);

    setShopValue([]);
    setShopData(shoplist[0].shop);
  };

  const handleShop = (value) => {
    if (value.length === 0) return;

    const {
      name, address, phone, position, time, intro, link, photos,
    } = value[0];

    setInfo({
      name,
      address,
      phone,
      time,
      intro,
      link,
      photos,
    });
    setShowInfo(true);
    setShopValue(value);
    setCenter(position);
    setShowMarker(true);
  };

  useEffect(() => {
    setCenter(ShopData[0].shop[0].position);
  }, []);

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLocationsConatiner>
          <StyledSuperTitle>
            <h2>搜尋店舖與預約</h2>
          </StyledSuperTitle>

          <StyledMapContainer>
            <StyledController>
              <StyledSelect
                placeholder="縣市"
                options={LocationsData}
                // valueField="name"
                onChange={(value) => handleLocations(value)}
              />
              <StyledSelect
                placeholder="店名"
                options={shopData}
                values={shopValue}
                // valueField="name"
                onChange={(value) => handleShop(value)}
              />
            </StyledController>
            <StyledMap>
              <GoogleMapReact
                className="map"
                bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                center={center}
                defaultZoom={14}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                options={{
                  fullscreenControl: false,
                  styles: MapStyle,
                }}
              >
                {
                  showMarker
                    ? (
                      <StyledMapMarker
                        lat={center.lat}
                        lng={center.lng}
                      />
                    )
                    : null
                }
              </GoogleMapReact>
              {
                showInfo
                  ? <ShopInfo info={info} handleInfo={handleInfo} />
                  : null
              }
            </StyledMap>
          </StyledMapContainer>
        </StyledLocationsConatiner>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Locations;
