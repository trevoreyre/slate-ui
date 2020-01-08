import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

const search = input => {
  if (input.length < 1) {
    return []
  }
  return countries.filter(country => {
    return country.toLowerCase().startsWith(input.toLowerCase())
  })
}

const wikiUrl = 'https://en.wikipedia.org'
const wikiParams = 'action=query&list=search&format=json&origin=*'
const searchWikipedia = input =>
  new Promise(resolve => {
    const url = `${wikiUrl}/w/api.php?${wikiParams}&srsearch=${encodeURI(
      input
    )}`

    if (input.length < 3) {
      return resolve([])
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data.query.search)
      })
  })

storiesOf('Autocomplete', module)
  .add('default', () => ({
    template: `
      <div>
        <Container size="sm" p="xl">
          <Autocomplete
            placeholder="Search for a country"
            :search="search"
            theme="light"
          />
        </Container>
        <Container bgColor="light" size="sm" p="xl">
          <Autocomplete
            placeholder="Search for a country"
            :search="search"
          />
        </Container>
      </div>
    `,
    methods: {
      search(input) {
        if (input.length < 1) {
          return []
        }
        return countries.filter(country => {
          return country.toLowerCase().startsWith(input.toLowerCase())
        })
      },
    },
  }))
  .addParameters({ styles: { padding: '40px', maxWidth: '400px' } })
  .add('rounded', () => ({
    template: `<Autocomplete rounded theme="light" placeholder="Search for a country" :search="search" />`,
    methods: { search },
  }))
  .add('position above', () => ({
    template: `
      <div style="height: 90vh; display: flex; flex-flow: column nowrap; justify-content: flex-end;">
        <Autocomplete
          theme="light"
          placeholder="Search for a country"
          :search="search"
        />
      </div>
    `,
    methods: { search },
  }))
  .add('Default results', () => ({
    template: `
      <Autocomplete
        theme="light"
        rounded
        aria-label="Search for a country"
        placeholder="Search for a country"
        :search="search"
        :get-result-value="getResultValue"
      />
    `,
    methods: {
      search(input) {
        if (input.length < 1) {
          return ['Canada', 'Mexico', 'United Kingdom', 'Russia'].map(c => ({
            name: c,
          }))
        }
        return countries
          .filter(country => {
            return country.toLowerCase().startsWith(input.toLowerCase())
          })
          .map(c => ({ name: c }))
      },
      getResultValue(result) {
        return result.name
      },
    },
  }))
  .add('Advanced search', () => ({
    template: `
      <Autocomplete
        aria-label="Search Wikipedia"
        placeholder="Search Wikipedia"
        :search="search"
        :get-result-value="getResultValue"
        @submit="onSubmit"
      />
    `,
    methods: {
      search(input) {
        return searchWikipedia(input)
      },
      getResultValue(result) {
        console.log('getResultValue', result)
        return result.title
      },
      onSubmit(result) {
        window.open(`${wikiUrl}/wiki/${encodeURI(result.title)}`)
      },
    },
  }))
  .add('Submit event', () => ({
    template: `
      <Autocomplete
        aria-label="Search for a country"
        placeholder="Search for a country"
        :search="search"
        @submit="onSubmit"
      />
    `,
    methods: {
      search,
      onSubmit(result) {
        alert(`You selected ${result}`)
      },
    },
  }))
  .add('Custom class', () => ({
    template: `
      <Autocomplete
        aria-label="Search for a country"
        placeholder="Search for a country"
        :search="search"
        base-class="search"
      />
    `,
    methods: {
      search,
    },
  }))
  .add('Custom events', () => ({
    template: `
      <Autocomplete
        aria-label="Search for a country"
        placeholder="Search for a country"
        :search="search"
        @input="handleInput"
        @keyup="handleKeyup"
      />
    `,
    methods: {
      search,
      handleInput(event) {
        return action('input')(event)
      },
      handleKeyup(event) {
        return action('keyup')(event)
      },
    },
  }))
  .add('Auto select', () => ({
    template: `
      <Autocomplete
        aria-label="Search for a country"
        placeholder="Search for a country"
        :search="search"
        auto-select
      />
    `,
    methods: {
      search,
    },
  }))
  .add('Default value', () => ({
    template: `
      <Autocomplete
        aria-label="Search for a country"
        placeholder="Search for a country"
        :search="search"
        default-value="United Kingdom"
      />
    `,
    methods: {
      search,
    },
  }))

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia & Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo Democratic Republic',
  'Costa Rica',
  "Cote D'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea North',
  'Korea South',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar (Burma)',
  'Namibia',
  'Nauru',
  'Nepal',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestinian State*',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Samoa',
  'San Marino',
  'Sao Tome & Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'St. Kitts & Nevis',
  'St. Lucia',
  'St. Vincent & The Grenadines',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'The Netherlands',
  'The Philippines',
  'Togo',
  'Tonga',
  'Trinidad & Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States Of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City (Holy See)',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]
