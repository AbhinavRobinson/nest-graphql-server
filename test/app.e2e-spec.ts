import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/items (GET)', () => {
    return request(app.getHttpServer())
      .get('/items')
      .expect(200)
      .expect('This action returns all items');
  });

  it('/items/12345 (GET)', () => {
    return request(app.getHttpServer())
      .get('/items/12345')
      .expect(200)
      .expect('This action returns a #12345 item');
  });

  it('/items (POST)', () => {
    return request(app.getHttpServer())
      .post('/items')
      .send({
        name: 'I1',
        description: 'D1',
      })
      .expect(201)
      .expect('Name: I1 Desc: D1');
  });
});
