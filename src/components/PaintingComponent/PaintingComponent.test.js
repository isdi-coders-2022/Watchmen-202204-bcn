import { BrowserRouter } from "react-router-dom";
const { render, screen } = require("@testing-library/react");
const {
  default: PaintsProvider,
} = require("../../store/providers/paintsProvider");
const { default: PaintingComponent } = require("./PaintingComponent");

describe("Given a PaintingComponent Component", () => {
  describe("When it's call)", () => {
    test("Then it should render a PaintingComponent with 1 li item", () => {
      const expectedNumOfLi = undefined;
      const paintingsToBeTested = [
        {
          links: {
            search: "http://www.rijksmuseum.nl/api/nl/collection",
          },
          id: "en-SK-C-597",
          priref: "5237",
          objectNumber: "SK-C-597",
          language: "en",
          title: "Portrait of a Woman, Possibly Maria Trip",
          copyrightHolder: null,
          webImage: {
            guid: "165d03bb-95e8-4447-a911-865f1bd201d6",
            offsetPercentageX: 50,
            offsetPercentageY: 35,
            width: 2031,
            height: 2676,
            url: "https://lh3.googleusercontent.com/AyiKhdEWJ7XmtPXQbRg_kWqKn6mCV07bsuUB01hJHjVVP-ZQFmzjTWt7JIWiQFZbb9l5tKFhVOspmco4lMwqwWImfgg=s0",
          },
          colors: [
            {
              percentage: 67,
              hex: "#0B0906",
            },
            {
              percentage: 15,
              hex: " #2F2718",
            },
            {
              percentage: 4,
              hex: " #A69272",
            },
            {
              percentage: 4,
              hex: " #CEC9B6",
            },
            {
              percentage: 3,
              hex: " #755F42",
            },
            {
              percentage: 3,
              hex: " #BBAC8E",
            },
            {
              percentage: 2,
              hex: " #4D4534",
            },
          ],
          colorsWithNormalization: [
            {
              originalHex: "#0B0906",
              normalizedHex: "#000000",
            },
            {
              originalHex: " #2F2718",
              normalizedHex: "#000000",
            },
            {
              originalHex: " #A69272",
              normalizedHex: "#E0CC91",
            },
            {
              originalHex: " #CEC9B6",
              normalizedHex: "#FBF6E1",
            },
            {
              originalHex: " #755F42",
              normalizedHex: "#B35A1F",
            },
            {
              originalHex: " #BBAC8E",
              normalizedHex: "#E0CC91",
            },
            {
              originalHex: " #4D4534",
              normalizedHex: "#2F4F4F",
            },
          ],
          normalizedColors: [
            {
              percentage: 82,
              hex: "#000000",
            },
            {
              percentage: 7,
              hex: " #D2B48C",
            },
            {
              percentage: 4,
              hex: " #FAEBD7",
            },
            {
              percentage: 3,
              hex: " #8B4513",
            },
            {
              percentage: 2,
              hex: " #696969",
            },
          ],
          normalized32Colors: [
            {
              percentage: 82,
              hex: "#000000",
            },
            {
              percentage: 7,
              hex: " #E0CC91",
            },
            {
              percentage: 4,
              hex: " #FBF6E1",
            },
            {
              percentage: 3,
              hex: " #B35A1F",
            },
            {
              percentage: 2,
              hex: " #2F4F4F",
            },
          ],
          titles: [
            "Portrait of a woman, possibly Maria Trip",
            "Portrait of a woman, probably Maria Trip",
          ],
          description:
            "Portret van Maria Trip (1619-83), zuster van Jacobus Trip en later de echtgenote van Balthasar Coymans. Staande, ten halven lijve, naar links. De linkerarm rust op een trapleuning, in de hand een waaier.",
          labelText: null,
          objectTypes: ["painting"],
          objectCollection: ["paintings"],
          makers: [],
          principalMakers: [
            {
              name: "Rembrandt van Rijn",
              unFixedName: "Rijn, Rembrandt van",
              placeOfBirth: "Leiden",
              dateOfBirth: "1606-07-15",
              dateOfBirthPrecision: null,
              dateOfDeath: "1669-10-08",
              dateOfDeathPrecision: null,
              placeOfDeath: "Amsterdam",
              occupation: ["print maker", "draughtsman", "painter"],
              roles: ["painter"],
              nationality: null,
              biography: null,
              productionPlaces: [],
              qualification: null,
              labelDesc: "Rembrandt van Rijn (15-jul-1606 - 08-okt-1669)",
            },
          ],
          plaqueDescriptionDutch:
            "Maria Trip, een rijke Amsterdamse koopmansdochter, was twintig toen Rembrandt haar portretteerde. De kunstenaar plaatste Maria in een stenen boog en besteedde veel aandacht aan de lichtreflecties, haar modieuze jurk en sieraden. De kostbare kleding is afgewerkt met stroken goudkant en Maria draagt een weelde aan parels.",
          plaqueDescriptionEnglish:
            "Maria Trip, daughter of one of Amsterdam???s wealthiest merchants, was twenty when Rembrandt painted her portrait. The artist placed Maria against a stone arch and devoted particular attention to the reflected light, the fashionable dress and jewellery. The costly garments are trimmed with strips of gold lace and Maria is wearing a profusion of pearls.",
          principalMaker: "Rembrandt van Rijn",
          artistRole: null,
          associations: [],
          acquisition: {
            method: "loan",
            date: "1897-05-01T00:00:00",
            creditLine: "On loan from the Familie Van Weede Stichting",
          },
          exhibitions: [],
          materials: ["panel", "oil paint (paint)"],
          techniques: [],
          productionPlaces: [],
          dating: {
            presentingDate: "1639",
            sortingDate: 1639,
            period: 17,
            yearEarly: 1639,
            yearLate: 1639,
          },
          classification: {
            iconClassIdentifier: [
              "61BB2",
              "41D262",
              "41D2652",
              "41D26611(+82)",
            ],
            iconClassDescription: [
              "historical persons - BB - woman",
              "fan",
              "lace",
              "pearl; pearl necklace (+ women's clothes)",
            ],
            motifs: [],
            events: [],
            periods: [],
            places: [],
            people: ["Trip, Maria"],
            objectNumbers: ["SK-C-597"],
          },
          hasImage: true,
          historicalPersons: ["Trip, Maria"],
          inscriptions: [],
          documentation: [
            "The Rembrandt Database,  Object information, Rembrandt,  Portrait of a woman probably Maria Trip,  c. 1639, Rijksmuseum, Amsterdam, inv. no. SK-C-597, http://www.rembrandtdatabase.org/Rembrandt/painting/3042/portrait-of-a-woman-probably-maria-trip, accessed 2016 February 01",
            "J. van der Veen, Opdrachtgevers in Amsterdam en Den Haag, In de gunst van hoge heren, in: Kunstschrift 3 (2009), p. 37, afb. 39",
            "R. Meijer, 'Portret van Maria Trip', Rijksmuseum Kunstkrant 32, nr. 6 (nov./dec. 2006), p. 12-13",
          ],
          catRefRPK: [],
          principalOrFirstMaker: "Rembrandt van Rijn",
          dimensions: [
            {
              unit: "cm",
              type: "height",
              precision: null,
              part: null,
              value: "107",
            },
            {
              unit: "cm",
              type: "width",
              precision: null,
              part: null,
              value: "82",
            },
          ],
          physicalProperties: [],
          physicalMedium: "oil on panel",
          longTitle:
            "Portrait of a Woman, Possibly Maria Trip, Rembrandt van Rijn, 1639",
          subTitle: "h 107cm ?? w 82cm",
          scLabelLine: "oil on panel, 1639",
          label: {
            title: "Portrait of a Woman, Possibly Maria Trip",
            makerLine: "oil on panel, 1639",
            description:
              "Maria???s father amassed enormous wealth through trade in iron and arms. In 1639 she was 20 years old and still unmarried. In this portrait, she makes no bones of the fact that she has money to spend. Her neckerchief is made of the finest, almost transparent lace, and she wears a fortune in pearls. Fans, like that in her left hand, were still rare and precious accessories in 1639.",
            notes: "Multimediatour Alle Rembrandts,  2115",
            date: "2019-02-26",
          },
          showImage: true,
          location: "HG-2.8",
        },
      ];

      render(
        <BrowserRouter>
          <PaintingComponent paintings={paintingsToBeTested} />
        </BrowserRouter>
      );

      const totalList = screen.getByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
