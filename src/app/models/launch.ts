interface Rocket {
    id: number;
    configuration: {
        id: number;
        url: string;
        name: string;
        family: string;
        full_name: string;
        variant: string;
    }
}

interface Mission {
    id: number;
    name: string;
    description: string;
    launch_designator: string | null;
    type: string;
    orbit: {
        id: number;
        name: string;
        abbrev: string;
    };
    agencies: Agency[];
    info_urls: string[];
    vid_urls: string[];
}

interface Agency {
    id: number;
    url: string;
    name: string;
    featured: boolean;
    type: string;
    country_code: string;
    abbrev: string;
    description: string;
    administrator: string;
    founding_year: string;
    launchers: string;
    spacecraft: string;
    launch_library_url: string;
    total_launch_count: number;
    consecutive_successful_launches: number;
    successful_launches: number;
    failed_launches: number;
    pending_launches: number;
    consecutive_successful_landings: number;
    successful_landings: number;
    failed_landings: number;
    attempted_landings: number;
    info_url: string;
    wiki_url: string;
    logo_url: string;
    image_url: string;
    nation_url: string;
}

interface Pad {
    id: number;
    url: string;
    agency_id: number | null;
    name: string;
    description: string | null;
    info_url: string | null;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: {
        id: number;
        url: string;
        name: string;
        country_code: string;
        description: string | null;
        map_image: string;
        timezone_name: string;
        total_launch_count: number;
        total_landing_count: number;
    },
    country_code: string;
    map_image: string;
    total_launch_count: number;
    orbital_launch_attempt_count: number;
}

interface LaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    type: string;
}

interface NetPrecision {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

export interface Launch {
    id: string;
    url: string;
    slug: string;
    name: string;
    status: {
        id: number;
        name: string;
        abbrev: string;
        description: string;
    },
    last_updated: string;
    net: string;
    window_end: string;
    window_start: string;
    net_precision: NetPrecision;
    probability: number | null;
    weather_concerns: string | null;
    holdreason: string | null;
    failreason: string | null;
    hashtag: string | null;
    launch_service_provider: LaunchServiceProvider;
    rocket: Rocket;
    mission: Mission;
    pad: Pad;
    webcast_live: boolean,
    image: string | null;
    infographic: string | null;
    program: string[],
    orbital_launch_attempt_count: number | null;
    location_launch_attempt_count: number;
    pad_launch_attempt_count: number;
    agency_launch_attempt_count: number;
    orbital_launch_attempt_count_year: number;
    location_launch_attempt_count_year: number;
    pad_launch_attempt_count_year: number;
    agency_launch_attempt_count_year: number;
    type: string;
}

export interface LaunchList {
    count: number;
    next: string
    previous: string,
    results: Launch[];
}