import Airtable from "airtable";
import { testQueue } from "./lib/queue";
import { models } from "./lib/db";

const CHANTING_BASE_ID = "appzQalaTVDxWFNUa";
const CHANTING_TABLE = "audio_uploads";
const LIVESTREAM_BASE_ID = "appjR8PT9lgU3dzw0";
const LIVESTREAM_TABLE = "livestreams";

const updateChantings = async () => {
  console.log("Updating chanting...");
  const chantingTable = Airtable.base(CHANTING_BASE_ID)(CHANTING_TABLE);
  await models.Chanting.destroy({ truncate: true });
  await chantingTable.select({}).eachPage(async (records, fetchNextPage) => {
    records.forEach(async (record) => {
      const f = record.fields;
      if (
        f.data &&
        f.fulltext &&
        f.chant_type &&
        f.audio_file?.[0]?.url &&
        f.email
      ) {
        await models.Chanting.create({
          id: f.id,
          data: f.data,
          fulltext: f.fulltext,
          chantType: f.chant_type,
          audioUrl: f.audio_file?.[0]?.url,
          email: f.email,
          createdAt: f.createdAt,
          updatedAt: f.updatedAt,
        });
      }
    });
    await fetchNextPage();
  });
};

const updateLiveStreams = async () => {
  console.log("Updating livestreams...");
  const liveStreamTable = Airtable.base(LIVESTREAM_BASE_ID)(LIVESTREAM_TABLE);
  await models.LiveStream.destroy({ truncate: true });
  await liveStreamTable.select({}).eachPage(async (records, fetchNextPage) => {
    records.forEach(async (record) => {
      const f = record.fields;
      await models.LiveStream.create({
        id: f.id,
        name: f.name,
        imageUrl: f.image?.[0]?.url,
        description: f.description,
        websiteUrl: f.websiteUrl,
        streamUrl: f.streamUrl,
        createdAt: f.createdAt,
        updatedAt: f.updatedAt,
      });
    });
    await fetchNextPage();
  });
};

testQueue.process(async (job) => {
  console.log(`Processing job ${job.id} with ${job.data.x}, ${job.data.y}`);
  await updateChantings();
  await updateLiveStreams();
  console.log("Done");
});
