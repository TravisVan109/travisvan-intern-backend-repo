import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Items API (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = module.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    // GET test
    it('GET /items', () => {
        return request(app.getHttpServer())
            .get('/items')
            .expect(200)
            .expect((res) => {
                expect(res.body).toBeInstanceOf(Array);
            });
    });

    // POST test
    it('POST /items', () => {
        return request(app.getHttpServer())
            .post('/items')
            .send({ name: 'pen', quantity: 5 })
            .expect(201)
            .expect((res) => {
                expect(res.body.name).toBe('pen');
            });
    });

    // POST with auth JWT
    it('POST /items with auth', () => {
        const testToken = 'Bearer your-test-jwt-here';
        return request(app.getHttpServer())
            .post('/items')
            .set('Authorization', testToken)
            .send({ name: 'pen', quantity: 5 })
            .expect(201);
    });
});