const fs = require('fs');
const path = require('path');

const filters = require('./filters');
const queries = require('./queries');

module.exports = {
  extend: '@apostrophecms/event',
  bundle: {
    directory: 'modules',
    modules: getBundleModuleNames()
  },
  options: {
    label: 'Event',
    pluralLabel: 'Events',
    sort: { start: 1 }
  },
  columns: {
    add: {
    }
  },
  fields: {
    add: {
      image: {
        label: 'Headline photo',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        },
        required: false
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'slug',
          'description',
          'image',
          'startDate',
          'allDay',
          'startTime',
          'endTime'
        ]
      }
    }
  },
  handlers(self, options) {
    return {
    };
  },
  methods(self, options) {
    return {
    };
  },
  filters,
  queries
};

function getBundleModuleNames() {
  const source = path.join(__dirname, './modules/@pph');
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `@pphs/${dirent.name}`);
}
