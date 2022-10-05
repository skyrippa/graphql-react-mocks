import { faker } from '@faker-js/faker';

export default {
  Query: {
    publications: () => {
      const publications = [];
      const publicationLength = faker.datatype.number({
        'min': 1,
        'max': 5
      })

      for (let i = 0; i < publicationLength; ++i) {
        publications.push({
          name: faker.lorem.sentence(),
          url: faker.internet.url()
        })
      }
      return publications;
    }
  },
  Mutation: {
    addPublication: (parent, args, context, info) => {
        console.log(parent, args, context, info);
        return 'Your publication has been submitted, thank you!'
    }
  }
}