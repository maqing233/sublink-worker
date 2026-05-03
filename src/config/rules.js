/**
 * Rule Definitions
 * Contains unified rule structure and predefined rule sets
 * Data source: DustinWin/ruleset_geodata (https://github.com/DustinWin/ruleset_geodata)
 * Discord from MetaCubeX (not available in DustinWin)
 */

export const CUSTOM_RULES = [];

export const UNIFIED_RULES = [
	{
		name: 'Ad Block',
		site_rules: ['ads'],
		ip_rules: []
	},
	{
		name: 'AI Services',
		site_rules: ['ai'],
		ip_rules: []
	},
	{
		name: 'Bilibili',
		site_rules: ['bilibili'],
		ip_rules: []
	},
	{
		name: 'Youtube',
		site_rules: ['youtube'],
		ip_rules: []
	},
	{
		name: 'Google',
		site_rules: ['google'],
		ip_rules: ['google']
	},
	{
		name: 'Private',
		site_rules: [],
		ip_rules: ['private']
	},
	{
		name: 'Location:CN',
		site_rules: ['cn'],
		ip_rules: ['cn']
	},
	{
		name: 'Telegram',
		site_rules: [],
		ip_rules: ['telegramip']
	},
	{
		name: 'Github',
		site_rules: ['github'],
		ip_rules: []
	},
	{
		name: 'Microsoft',
		site_rules: ['microsoft-cn'],
		ip_rules: []
	},
	{
		name: 'Apple',
		site_rules: ['apple-cn'],
		ip_rules: []
	},
	{
		name: 'Social Media',
		site_rules: ['facebook', 'instagram', 'twitter', 'tiktok', 'linkedin'],
		ip_rules: []
	},
	{
		name: 'Streaming',
		site_rules: ['netflix', 'disney', 'max', 'primevideo', 'appletv', 'youtube'],
		ip_rules: []
	},
	{
		name: 'Gaming',
		site_rules: ['games'],
		ip_rules: []
	},
	{
		name: 'Education',
		site_rules: ['category-scholar-!cn'],
		ip_rules: []
	},
	{
		name: 'Financial',
		site_rules: ['paypal'],
		ip_rules: []
	},
	{
		name: 'Cloud Services',
		site_rules: ['aws', 'azure', 'digitalocean', 'heroku', 'dropbox'],
		ip_rules: []
	},
	{
		name: 'Non-China',
		site_rules: ['geolocation-!cn'],
		ip_rules: []
	},
	{
		name: 'Discord',
		site_rules: ['discord'],
		ip_rules: []
	},
	{
		name: 'Spotify',
		site_rules: ['spotify'],
		ip_rules: []
	},
	{
		name: 'Media',
		site_rules: ['media'],
		ip_rules: []
	},
	{
		name: 'GFW',
		site_rules: ['gfw'],
		ip_rules: []
	},
	{
		name: 'Proxy',
		site_rules: ['proxy'],
		ip_rules: []
	},
	{
		name: 'Trackers',
		site_rules: ['trackerslist'],
		ip_rules: []
	},
	{
		name: 'NetworkTest',
		site_rules: ['networktest'],
		ip_rules: []
	}
];

// Rule names that should default to DIRECT instead of Node Select
export const DIRECT_DEFAULT_RULES = new Set(['Private', 'Location:CN']);
export const REJECT_ACTION_RULES = new Set(['Ad Block']);

export const PREDEFINED_RULE_SETS = {
	minimal: ['Location:CN', 'Private', 'Non-China'],
	balanced: ['Location:CN', 'Private', 'Non-China', 'Github', 'Google', 'Youtube', 'AI Services', 'Telegram'],
	comprehensive: UNIFIED_RULES.map(rule => rule.name)
};

// Generate SITE_RULE_SETS and IP_RULE_SETS from UNIFIED_RULES
export const SITE_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	rule.site_rules.forEach(site_rule => {
		acc[site_rule] = `${site_rule}.srs`;
	});
	return acc;
}, {});

export const IP_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	rule.ip_rules.forEach(ip_rule => {
		acc[ip_rule] = `${ip_rule}.srs`;
	});
	return acc;
}, {});

// Generate CLASH_SITE_RULE_SETS and CLASH_IP_RULE_SETS for .mrs format
export const CLASH_SITE_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	rule.site_rules.forEach(site_rule => {
		acc[site_rule] = `${site_rule}.mrs`;
	});
	return acc;
}, {});

export const CLASH_IP_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	rule.ip_rules.forEach(ip_rule => {
		acc[ip_rule] = `${ip_rule}.mrs`;
	});
	return acc;
}, {});
