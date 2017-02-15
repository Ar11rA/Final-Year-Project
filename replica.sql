--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: oladetails; Type: TABLE; Schema: public; Owner: aritraaritra
--

CREATE TABLE oladetails (
    id integer NOT NULL,
    cabtype text,
    basefare integer,
    fareperkm integer,
    farepermin integer
);


ALTER TABLE oladetails OWNER TO aritraaritra;

--
-- Name: oladetails_id_seq; Type: SEQUENCE; Schema: public; Owner: aritraaritra
--

CREATE SEQUENCE oladetails_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE oladetails_id_seq OWNER TO aritraaritra;

--
-- Name: oladetails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aritraaritra
--

ALTER SEQUENCE oladetails_id_seq OWNED BY oladetails.id;


--
-- Name: uberdetails; Type: TABLE; Schema: public; Owner: aritraaritra
--

CREATE TABLE uberdetails (
    id integer NOT NULL,
    cabtype text,
    basefare integer,
    fareperkm integer,
    farepermin integer
);


ALTER TABLE uberdetails OWNER TO aritraaritra;

--
-- Name: uberdetails_id_seq; Type: SEQUENCE; Schema: public; Owner: aritraaritra
--

CREATE SEQUENCE uberdetails_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE uberdetails_id_seq OWNER TO aritraaritra;

--
-- Name: uberdetails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aritraaritra
--

ALTER SEQUENCE uberdetails_id_seq OWNED BY uberdetails.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: aritraaritra
--

CREATE TABLE users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    address text NOT NULL,
    birthday date NOT NULL
);


ALTER TABLE users OWNER TO aritraaritra;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: aritraaritra
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO aritraaritra;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aritraaritra
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: oladetails id; Type: DEFAULT; Schema: public; Owner: aritraaritra
--

ALTER TABLE ONLY oladetails ALTER COLUMN id SET DEFAULT nextval('oladetails_id_seq'::regclass);


--
-- Name: uberdetails id; Type: DEFAULT; Schema: public; Owner: aritraaritra
--

ALTER TABLE ONLY uberdetails ALTER COLUMN id SET DEFAULT nextval('uberdetails_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: aritraaritra
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: oladetails; Type: TABLE DATA; Schema: public; Owner: aritraaritra
--

COPY oladetails (id, cabtype, basefare, fareperkm, farepermin) FROM stdin;
1	mini	40	6	1
2	micro	50	8	1
5	Lux	250	22	3
4	Prime Play	50	10	1
3	Prime Sedan	50	10	1
6	Prime SUV	200	17	1
\.


--
-- Name: oladetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aritraaritra
--

SELECT pg_catalog.setval('oladetails_id_seq', 1, false);


--
-- Data for Name: uberdetails; Type: TABLE DATA; Schema: public; Owner: aritraaritra
--

COPY uberdetails (id, cabtype, basefare, fareperkm, farepermin) FROM stdin;
1	UberGO	35	7	1
2	UberX	40	8	1
3	UberXL	80	17	1
4	UberPool	20	5	1
\.


--
-- Name: uberdetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aritraaritra
--

SELECT pg_catalog.setval('uberdetails_id_seq', 1, false);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: aritraaritra
--

COPY users (id, name, password, address, birthday) FROM stdin;
1	Aritra Ghosh	Caljam667	Kalamandir Bus Stop, Marathahalli	1995-02-02
7	AG	AG	KMBS	1998-09-02
8	AG	AG	KMBS	1998-09-02
9	AG	AG	KMBS	1998-09-02
2	AG1	AG1	KMBS1	1998-09-02
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aritraaritra
--

SELECT pg_catalog.setval('users_id_seq', 9, true);


--
-- Name: oladetails oladetails_pkey; Type: CONSTRAINT; Schema: public; Owner: aritraaritra
--

ALTER TABLE ONLY oladetails
    ADD CONSTRAINT oladetails_pkey PRIMARY KEY (id);


--
-- Name: uberdetails uberdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: aritraaritra
--

ALTER TABLE ONLY uberdetails
    ADD CONSTRAINT uberdetails_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: aritraaritra
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

