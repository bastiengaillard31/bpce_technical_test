import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LaunchService } from './launch.service';

describe('LaunchService', () => {
  let service: LaunchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LaunchService],
    });

    service = TestBed.inject(LaunchService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Array<Launch>>', () => {
    const mockLaunches = [{
      "id": "b666d809-7a76-4b4d-98bd-6c471cd7e4a8",
      "url": "https://ll.thespacedevs.com/2.2.0/launch/b666d809-7a76-4b4d-98bd-6c471cd7e4a8/",
      "slug": "falcon-9-block-5-starlink-group-6-33",
      "name": "Falcon 9 Block 5 | Starlink Group 6-33",
      "status": {
        "id": 3,
        "name": "Launch Successful",
        "abbrev": "Success",
        "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
      },
      "last_updated": "2023-12-03T18:37:29Z",
      "net": "2023-12-07T05:07:30Z",
      "window_end": "2023-12-07T07:59:00Z",
      "window_start": "2023-12-07T04:01:00Z",
      "net_precision": {
        "id": 0,
        "name": "Second",
        "abbrev": "SEC",
        "description": "The T-0 is accurate to the second."
      },
      "probability": 95,
      "weather_concerns": "Liftoff Winds",
      "holdreason": "",
      "failreason": "",
      "hashtag": null,
      "launch_service_provider": {
        "id": 121,
        "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
        "name": "SpaceX",
        "type": "Commercial"
      },
      "rocket": {
        "id": 8035,
        "configuration": {
          "id": 164,
          "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
          "name": "Falcon 9",
          "family": "Falcon",
          "full_name": "Falcon 9 Block 5",
          "variant": "Block 5"
        }
      },
      "mission": {
        "id": 6580,
        "name": "Starlink Group 6-33",
        "description": "A batch of 23 satellites for the Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
        "launch_designator": null,
        "type": "Communications",
        "orbit": {
          "id": 8,
          "name": "Low Earth Orbit",
          "abbrev": "LEO"
        },
        "agencies": [
          {
            "id": 121,
            "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
            "name": "SpaceX",
            "featured": true,
            "type": "Commercial",
            "country_code": "USA",
            "abbrev": "SpX",
            "description": "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX operates from many pads, on the East Coast of the US they operate from SLC-40 at Cape Canaveral Space Force Station and historic LC-39A at Kennedy Space Center. They also operate from SLC-4E at Vandenberg Space Force Base, California, usually for polar launches. Another launch site is being developed at Boca Chica, Texas.",
            "administrator": "CEO: Elon Musk",
            "founding_year": "2002",
            "launchers": "Falcon | Starship",
            "spacecraft": "Dragon",
            "launch_library_url": "https://launchlibrary.net/1.4/agency/121",
            "total_launch_count": 305,
            "consecutive_successful_launches": 6,
            "successful_launches": 294,
            "failed_launches": 11,
            "pending_launches": 136,
            "consecutive_successful_landings": 6,
            "successful_landings": 257,
            "failed_landings": 23,
            "attempted_landings": 279,
            "info_url": "http://www.spacex.com/",
            "wiki_url": "http://en.wikipedia.org/wiki/SpaceX",
            "logo_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/logo/spacex_logo_20220826094919.png",
            "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/spacex_image_20190207032501.jpeg",
            "nation_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/spacex_nation_20230531064544.jpg"
          }
        ],
        "info_urls": [],
        "vid_urls": []
      },
      "pad": {
        "id": 80,
        "url": "https://ll.thespacedevs.com/2.2.0/pad/80/",
        "agency_id": 121,
        "name": "Space Launch Complex 40",
        "description": null,
        "info_url": null,
        "wiki_url": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
        "map_url": "https://www.google.com/maps?q=28.56194122,-80.57735736",
        "latitude": "28.56194122",
        "longitude": "-80.57735736",
        "location": {
          "id": 12,
          "url": "https://ll.thespacedevs.com/2.2.0/location/12/",
          "name": "Cape Canaveral, FL, USA",
          "country_code": "USA",
          "description": null,
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
          "timezone_name": "America/New_York",
          "total_launch_count": 924,
          "total_landing_count": 40
        },
        "country_code": "USA",
        "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
        "total_launch_count": 215,
        "orbital_launch_attempt_count": 215
      },
      "webcast_live": false,
      "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230922123911.png",
      "infographic": null,
      "program": [],
      "orbital_launch_attempt_count": 6556,
      "location_launch_attempt_count": 924,
      "pad_launch_attempt_count": 215,
      "agency_launch_attempt_count": 305,
      "orbital_launch_attempt_count_year": 199,
      "location_launch_attempt_count_year": 56,
      "pad_launch_attempt_count_year": 52,
      "agency_launch_attempt_count_year": 92,
      "type": "normal"
    }, {
      "id": "37262865-9752-4d2e-9dbb-23ae0d5e11f0",
      "url": "https://ll.thespacedevs.com/2.2.0/launch/37262865-9752-4d2e-9dbb-23ae0d5e11f0/",
      "slug": "long-march-2d-unknown-payload",
      "name": "Long March 2D | Unknown Payload",
      "status": {
        "id": 1,
        "name": "Go for Launch",
        "abbrev": "Go",
        "description": "Current T-0 confirmed by official or reliable sources."
      },
      "last_updated": "2023-12-05T05:18:06Z",
      "net": "2023-12-10T01:58:00Z",
      "window_end": "2023-12-10T02:08:00Z",
      "window_start": "2023-12-10T01:48:00Z",
      "net_precision": {
        "id": 2,
        "name": "Hour",
        "abbrev": "HR",
        "description": "The T-0 is accurate to the hour."
      },
      "probability": null,
      "weather_concerns": null,
      "holdreason": "",
      "failreason": "",
      "hashtag": null,
      "launch_service_provider": {
        "id": 88,
        "url": "https://ll.thespacedevs.com/2.2.0/agencies/88/",
        "name": "China Aerospace Science and Technology Corporation",
        "type": "Government"
      },
      "rocket": {
        "id": 8143,
        "configuration": {
          "id": 17,
          "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/17/",
          "name": "Long March 2D",
          "family": "Long March 2",
          "full_name": "Long March 2D",
          "variant": "2D"
        }
      },
      "mission": {
        "id": 6701,
        "name": "Unknown Payload",
        "description": "?",
        "launch_designator": null,
        "type": "Unknown",
        "orbit": {
          "id": 25,
          "name": "Unknown",
          "abbrev": "N/A"
        },
        "agencies": [],
        "info_urls": [],
        "vid_urls": []
      },
      "pad": {
        "id": 66,
        "url": "https://ll.thespacedevs.com/2.2.0/pad/66/",
        "agency_id": 17,
        "name": "Launch Complex 3 (LC-3/LA-1)",
        "description": null,
        "info_url": null,
        "wiki_url": "https://en.wikipedia.org/wiki/Xichang_Satellite_Launch_Center",
        "map_url": "https://www.google.com/maps?q=28.247209,102.02917",
        "latitude": "28.247209",
        "longitude": "102.02917",
        "location": {
          "id": 16,
          "url": "https://ll.thespacedevs.com/2.2.0/location/16/",
          "name": "Xichang Satellite Launch Center, People's Republic of China",
          "country_code": "CHN",
          "description": null,
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_16_20200803142513.jpg",
          "timezone_name": "Asia/Shanghai",
          "total_launch_count": 196,
          "total_landing_count": 0
        },
        "country_code": "CHN",
        "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_66_20200803143611.jpg",
        "total_launch_count": 85,
        "orbital_launch_attempt_count": 85
      },
      "webcast_live": false,
      "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/long2520march25202d_image_20190222031211.jpeg",
      "infographic": null,
      "program": [],
      "orbital_launch_attempt_count": 6559,
      "location_launch_attempt_count": 197,
      "pad_launch_attempt_count": 86,
      "agency_launch_attempt_count": 449,
      "orbital_launch_attempt_count_year": 202,
      "location_launch_attempt_count_year": 14,
      "pad_launch_attempt_count_year": 8,
      "agency_launch_attempt_count_year": 43,
      "type": "normal"
    }];

    service.getLaunches().subscribe((launches) => {
      expect(launches).toEqual(mockLaunches);
    });

    const req = httpTestingController.expectOne(service.launchApiUrl);

    expect(req.request.method).toEqual('GET');

    req.flush({ results: mockLaunches });
  });
});